# Elyra Custom Airflow Fork

A customized fork of [Elyra](https://github.com/elyra-ai/elyra) with fixes and enhancements for Airflow runtime integration.

## What This Fork Provides

This is a **working fork** of Elyra that fixes critical Airflow 2.x compatibility issues and provides a foundation for custom Airflow workflow enhancements.

### Key Fixes Applied

- **Airflow 2.x Compatibility**: Fixed deprecated `airflow.contrib.*` imports that cause `ModuleNotFoundError` in modern Airflow
- **Build Process**: Resolved prettier formatting issues that prevented successful builds
- **Modern Operators**: Updated all operator imports to use current Airflow providers

### What Was Fixed

| Component | Before (Broken) | After (Working) |
|-----------|----------------|-----------------|
| Spark Operators | `airflow.contrib.operators.spark_*` | `airflow.providers.apache.spark.operators.*` |
| Slack Operator | `airflow.operators.slack_operator.*` | `airflow.providers.slack.operators.slack.*` |
| HTTP Operator | `airflow.operators.http_operator.*` | `airflow.providers.http.operators.http.*` |

## Prerequisites

- Python 3.10+
- Node.js 20+ (required for JupyterLab 4.x)
- Yarn package manager
- Git

## Build Instructions

### 1. Clone This Fork

```bash
git clone https://github.com/YOUR_USERNAME/elyra-custom-airflow.git
cd elyra-custom-airflow
```

### 2. Setup Environment

```bash
# Create virtual environment
python -m venv elyra-dev
source elyra-dev/bin/activate  # Windows: elyra-dev\Scripts\activate

# Upgrade pip
pip install --upgrade pip
```

### 3. Install Dependencies

```bash
# Install with legacy peer deps (required for dependency resolution)
yarn install --legacy-peer-deps
```

### 4. Build Elyra

```bash
# Build with increased memory and proper exclusions
NODE_OPTIONS=--max-old-space-size=8192 make clean install-dev
```

If the build fails, check [Troubleshooting](#troubleshooting) section.

### 5. Run Your Custom Build

```bash
# Start your custom Elyra instance
./elyra-dev/bin/jupyter elyra
```

Access at: `http://localhost:8888/lab`

## Verify Installation

Check that you're running the custom build:

```bash
# Should show JupyterLab 4.4.3
./elyra-dev/bin/jupyter lab --version

# Should show @elyra/* extensions at v4.0.0-dev
./elyra-dev/bin/jupyter labextension list

# Verify Airflow compatibility fix is applied
grep -A 6 "available_airflow_operators" ./elyra-dev/lib/python3.11/site-packages/elyra/pipeline/airflow/airflow_processor.py
```

You should see modern provider import paths like:
- `airflow.providers.apache.spark.operators.spark_submit.SparkSubmitOperator`
- `airflow.providers.slack.operators.slack.SlackAPIPostOperator`

## Key Customization Files

| File | Purpose |
|------|---------|
| `elyra/pipeline/airflow/airflow_processor.py` | **Fixed:** Airflow 2.x compatible operator imports |
| `elyra/templates/airflow/airflow_template.jinja2` | Airflow DAG generation template |
| `packages/pipeline-editor/` | Pipeline editor UI components |
| `elyra/metadata/schemas/airflow.json` | Airflow runtime configuration |

## Making Changes

1. **Edit source files** in the repository
2. **Rebuild** if needed:
   ```bash
   # For Python changes
   pip install -e . --force-reinstall
   
   # For UI changes  
   make clean install-dev
   ```
3. **Restart** Elyra to see changes

## Troubleshooting

### Build Fails with Memory Error

**Error**: `JavaScript heap out of memory`

**Fix**:
```bash
NODE_OPTIONS=--max-old-space-size=8192 make clean install-dev
```

### Build Fails with Prettier Errors

**Error**: `SyntaxError: Unterminated regular expression` in staging files

**Fix**: Add to `.gitignore`:
```bash
echo "elyra-dev/" >> .gitignore
echo "**/staging/" >> .gitignore
```

### Dependency Resolution Errors

**Error**: `npm ERR! code ERESOLVE`

**Fix**:
```bash
yarn install --legacy-peer-deps
```

### System JupyterLab Starts Instead of Custom Build

**Fix**: Always use the full path:
```bash
./elyra-dev/bin/jupyter elyra
```

### Airflow DAGs Fail with Import Errors

**Issue**: `ModuleNotFoundError: No module named 'airflow.contrib'`

**Fix**: This fork includes the fix. Verify with:
```bash
grep "airflow.providers" ./elyra-dev/lib/python3.11/site-packages/elyra/pipeline/airflow/airflow_processor.py
```

## Development Workflow

1. **Make changes** to source files
2. **Test locally**: `./elyra-dev/bin/jupyter elyra`
3. **Rebuild if needed**: `make clean install-dev`
4. **Commit changes**: Standard git workflow
5. **Share**: Push to your fork

## Project Structure

```
elyra-custom-airflow/
├── elyra/
│   ├── pipeline/airflow/
│   │   └── airflow_processor.py      # 🔧 FIXED: Airflow 2.x imports
│   └── templates/airflow/
│       └── airflow_template.jinja2   # DAG template
├── packages/pipeline-editor/         # UI components
├── elyra-dev/                       # Your build environment
└── .gitignore                       # 🔧 FIXED: Excludes staging files
```

## Why This Fork Exists

The upstream Elyra project has compatibility issues with modern Airflow 2.x deployments due to deprecated import paths. This fork:

1. **Fixes the immediate problem** - Makes Elyra work with Airflow 2.x
2. **Provides a foundation** - For additional Airflow customizations
3. **Maintains compatibility** - With the latest Elyra features

## Contributing to This Fork

1. Fork this repository
2. Create a feature branch
3. Make your changes
4. Test the build process
5. Submit a pull request

## Staying Updated

To sync with upstream Elyra:

```bash
# Add upstream if not already added
git remote add upstream https://github.com/elyra-ai/elyra.git

# Sync with upstream
git fetch upstream
git merge upstream/main

# Rebuild after sync
yarn install --legacy-peer-deps
make clean install-dev
```

## Docker Build and Test

To build the Elyra Docker image and test it locally, run:

```bash
make elyra-image TAG=keyward-elyra

docker run -it -p 8888:8888 elyra/elyra:keyward-elyra
```