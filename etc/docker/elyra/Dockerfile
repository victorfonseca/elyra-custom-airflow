# syntax=docker/dockerfile:experimental
#
# Copyright 2018-2025 Elyra Authors
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#

# Ubuntu 20.04.2 LTS (Focal Fossa)
# Repository: https://hub.docker.com/r/jupyterhub/k8s-singleuser-sample/tags
FROM jupyterhub/k8s-singleuser-sample:1.2.0

ARG TAG="dev"
ARG ELYRA_VERSION
ARG ELYRA_PACKAGE=elyra-"$ELYRA_VERSION"-py3-none-any.whl

# - Include with KFP Tekton support ('kfp-tekton') and component examples ('kfp-examples')
ARG ELYRA_EXTRAS=[kfp-tekton,kfp-examples,gitlab]

COPY requirements.txt ${ELYRA_PACKAGE} ./

# Stay as root for all installations
USER root

# Install jupyter_server and notebook
RUN pip install jupyter_server notebook==6.4.12

# Install build dependencies for native extensions
RUN apt-get update && apt-get install -y --no-install-recommends \
    gcc \
    g++ \
    build-essential \
    python3-dev \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Change ownership of files to jovyan
RUN chown jovyan:users ./requirements.txt ./"${ELYRA_PACKAGE}"

# Install Elyra (as root to avoid permission issues)
RUN python3 -m pip install --quiet --no-cache-dir "$ELYRA_PACKAGE""$ELYRA_EXTRAS" && rm "$ELYRA_PACKAGE"

# Install custom requirements
RUN python3 -m pip install -r requirements.txt && rm requirements.txt

# Copy Elyra entrypoint
COPY --chmod=0755 --chown=root:root start-elyra.sh /usr/local/bin/start-elyra.sh

# Switch back to jovyan user for runtime
USER jovyan

CMD ["/usr/local/bin/start-elyra.sh"]