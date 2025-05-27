[![PyPI version](https://badge.fury.io/py/elyra.svg)](https://badge.fury.io/py/elyra)
[![Anaconda-Server Badge](https://anaconda.org/conda-forge/elyra/badges/version.svg)](https://anaconda.org/conda-forge/elyra)
[![Downloads](https://pepy.tech/badge/elyra)](https://pepy.tech/project/elyra)
[![Documentation Status](https://readthedocs.org/projects/elyra/badge/?version=latest)](https://elyra.readthedocs.io/en/latest/?badge=latest)
[![GitHub](https://img.shields.io/badge/issue_tracking-github-blue.svg)](https://github.com/elyra-ai/elyra/issues)
[![OpenSSF Best Practices](https://bestpractices.coreinfrastructure.org/projects/5761/badge)](https://bestpractices.coreinfrastructure.org/projects/5761)
[![Gitter](https://badges.gitter.im/elyra-ai/community.svg)](https://gitter.im/elyra-ai/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

# Elyra Custom Airflow Build

A customized fork of [Elyra](https://github.com/elyra-ai/elyra) for enhanced Airflow runtime templates and UI components.

## 🎯 Project Overview

This project extends Elyra's capabilities to provide:
- **Custom Airflow DAG templates** with enhanced features
- **Improved UI components** for Airflow-specific workflows  
- **Extended runtime configurations** for better Airflow integration
- **Enhanced pipeline editor** with Airflow-focused tools

## ✅ Current Status

- **Elyra Version**: 4.0.0-dev (custom build)
- **JupyterLab Version**: 4.4.3
- **All Extensions**: Loaded and functional
- **Airflow Processor**: Registered and working
- **Pipeline Editor**: Functional with custom enhancements

## 🛠️ Build Instructions

### Prerequisites

- Python 3.10+
- Node.js 18+
- Yarn package manager
- GNU Make
- Git

### Step 1: Fork Setup

```bash
# Clone the official Elyra repository
git clone https://github.com/elyra-ai/elyra.git elyra-official
cd elyra-official

# Point to your custom repository
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/elyra-custom-airflow.git
git push -u origin --all
git push -u origin --tags

# Clone your fork for development
cd ..
git clone https://github.com/YOUR_USERNAME/elyra-custom-airflow.git
cd elyra-custom-airflow
git remote add upstream https://github.com/elyra-ai/elyra.git
```

### Step 2: Environment Setup

```bash
# Create Python virtual environment
python -m venv elyra-dev
source elyra-dev/bin/activate  # On Windows: elyra-dev\Scripts\activate

# Upgrade pip
pip install --upgrade pip
```

### Step 3: Resolve Dependencies

```bash
# Install with legacy peer dependencies to resolve conflicts
npm install --legacy-peer-deps
```

### Step 4: Configure Build Process

```bash
# Temporarily disable ESLint to avoid linting generated files
sed -i.bak 's/yarn eslint/#yarn eslint/' Makefile
```

### Step 5: Memory-Optimized Build

```bash
# Build JupyterLab with increased Node.js memory and disabled minification
NODE_OPTIONS=--max-old-space-size=8192 jupyter lab build --no-minimize
```

### Step 6: Development Build

```bash
# Complete development build
make clean install-dev
```

### Step 7: Verification

```bash
# Verify server extensions
jupyter server extension list

# Verify lab extensions (should show @elyra/* at v4.0.0-dev)
jupyter labextension list
```

### Step 8: Running Your Custom Build

```bash
# Start your custom Elyra (not system JupyterLab)
./elyra-dev/bin/jupyter elyra
```

Access at: `http://localhost:8888/lab?token=<your-token>`

## 🔧 Troubleshooting

### Memory Errors During Build

**Error**: `FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of memory`

**Solution**:
```bash
NODE_OPTIONS=--max-old-space-size=8192 jupyter lab build --no-minimize
```

### ESLint Errors on Generated Files

**Error**: Thousands of ESLint errors in generated JavaScript files

**Solution**: Comment out ESLint in Makefile:
```bash
sed -i.bak 's/yarn eslint/#yarn eslint/' Makefile
```

### Dependency Conflicts

**Error**: `npm ERR! code ERESOLVE` with peer dependency conflicts

**Solution**:
```bash
npm install --legacy-peer-deps
```

### Wrong JupyterLab Version Running

**Issue**: System JupyterLab starts instead of custom build

**Solution**: Use direct path to your custom build:
```bash
./elyra-dev/bin/jupyter elyra
```

### Missing JupyterLab Command

**Error**: `Jupyter command 'jupyter-lab' not found`

**Solution**: Use the `elyra` subcommand:
```bash
./elyra-dev/bin/jupyter elyra
```

## 📁 Project Structure

```
elyra-custom-airflow/
├── elyra/
│   ├── templates/airflow/
│   │   └── airflow_template.jinja2      # Main Airflow DAG template
│   ├── pipeline/airflow/
│   │   └── airflow_processor.py         # Airflow pipeline processor
│   └── metadata/schemas/
│       └── airflow.json                 # Airflow runtime schema
├── packages/
│   └── pipeline-editor/                 # UI components
├── elyra-dev/                           # Your custom build environment
├── Makefile                             # Build configuration
└── README.md                            # This file
```

## 🎯 Key Files for Customization

| File | Purpose |
|------|---------|
| `elyra/templates/airflow/airflow_template.jinja2` | Main Airflow DAG generation template |
| `elyra/pipeline/airflow/airflow_processor.py` | Airflow pipeline processing logic |
| `packages/pipeline-editor/src/` | Pipeline editor UI components |
| `elyra/metadata/schemas/airflow.json` | Airflow runtime configuration schema |

## 🚀 Development Workflow

### Making Changes

1. **Activate environment**:
   ```bash
   source elyra-dev/bin/activate
   ```

2. **Make your changes** to templates or code

3. **Rebuild if needed**:
   ```bash
   # For Python changes only
   make install-server
   
   # For UI changes
   make clean install-dev
   ```

4. **Test changes**:
   ```bash
   ./elyra-dev/bin/jupyter elyra
   ```

### Template Customization

The main Airflow template is located at:
```
elyra/templates/airflow/airflow_template.jinja2
```

This template receives variables during DAG generation and can be customized for:
- Enhanced DAG configuration
- Custom operator support
- Improved error handling
- Task group implementation
- Advanced resource management

## 📊 Verification Commands

```bash
# Check versions
./elyra-dev/bin/jupyter --version
./elyra-dev/bin/jupyter lab --version

# List extensions
./elyra-dev/bin/jupyter server extension list
./elyra-dev/bin/jupyter labextension list

# Check paths
which jupyter
which python
```

## 🎉 Success Indicators

When everything is working correctly, you should see:

- ✅ JupyterLab version 4.4.3
- ✅ All `@elyra/*` extensions at version `v4.0.0-dev`
- ✅ Airflow processor registration message: `Registering airflow processor`
- ✅ Pipeline editor accessible in JupyterLab
- ✅ No 404 errors when accessing `/lab`

## 🔄 Staying Updated

To sync with upstream Elyra changes:

```bash
# Fetch upstream changes
git fetch upstream

# Merge or rebase as needed
git merge upstream/main

# Rebuild
npm install --legacy-peer-deps
make clean install-dev
```

## 📝 Next Steps

1. **Examine current Airflow template structure**
2. **Plan custom DAG enhancements**
3. **Customize UI components for Airflow workflows**
4. **Extend runtime configuration options**
5. **Test custom pipeline execution**