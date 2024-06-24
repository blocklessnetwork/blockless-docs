# Running a Worker Node

## Current Boot Nodes
The following nodes are used to boot into the network:

`/ip4/146.190.197.136/tcp/31783/p2p/12D3KooWMUFNmnPBEZY5y7qqB8F6eVEzfPXG7KAd1v1FV1Q44A6d`
`/ip4/209.38.5.92/tcp/30564/p2p/12D3KooWK2qKNvmuYeQ7TFSkja8wqgSdvpfEYKgqkvRSf1GtpHEN`


## Prerequisites
Before you begin, ensure you have the following prerequisites:

- A machine with Docker installed and running.
- **Optional**: Valid `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` for an S3-compatible storage provider if you choose to back up your node's keys and configuration to S3-compatible storage.
- A specified `KEY_PATH` and `KEY_PASSWORD` for accessing your backup data, if using S3-compatible storage.

### Alternative Backup Options
If you are not using S3-compatible storage, you can back up your data using Kubernetes or a Docker-managed persistent disk. Here are some general steps to consider:

**Kubernetes**: Utilize persistent volumes in your pod specifications to ensure data persists across pod restarts and deployments. Consider using StatefulSets for applications that require stable, unique network identifiers.

**Docker**: Configure volume mappings in your Docker commands to link container storage to a persistent disk on the host system. Ensure the host's disk is backed up regularly using your preferred system backup tools.

## Running the b7s Docker Image
### Run the Worker Node
While b7s is multi-platform, we currently offer x86_64 enabled docker images, arm64 images are on the way.

#### Worker Node Configuration with AWS Backup
To run the node as a worker using AWS for backups, configure the Docker container with the environment variables for AWS and port mappings. Use the following command, replacing the placeholders with your actual values:

- `AWS_ACCESS_KEY_ID` this is the KEY you need for an S3 Bucket
- `AWS_SECRET_ACCESS_KEY` this is the secret generated for the S3 Access Key
- `KEY_PATH` this is the Bucket Path, typically just the bucket name
- `KEY_PASSWORD` this is a chosen password used for PGP/GPG encryption of the node identity information before storing in S3, make a backup this, it is used to restore the identity if the container is stopped.

```bash
docker run --platform=linux/amd64 -d \
-e NODE_ROLE=worker \
-e AWS_ACCESS_KEY_ID=${YOUR KEY} \
-e AWS_SECRET_ACCESS_KEY=${YOUR SECRET} \
-e KEY_PATH=${YOUR BUCKET PATH} \
-e KEY_PASSWORD=${YOUR BACKUP PASSWORD} \
-e S3_HOST=https://s3.us-west-1.amazonaws.com \
-e BOOT_NODES=/ip4/146.190.197.136/tcp/31783/p2p/12D3KooWMUFNmnPBEZY5y7qqB8F6eVEzfPXG7KAd1v1FV1Q44A6d,/ip4/209.38.5.92/tcp/30564/p2p/12D3KooWK2qKNvmuYeQ7TFSkja8wqgSdvpfEYKgqkvRSf1GtpHEN \
ghcr.io/blocklessnetwork/b7s:v0.6.2
```

#### Worker Node Configuration with Local Key Path Mount
To run the node as a worker using a local or Docker-managed mount for key storage, omit the AWS environment variables and map the key storage directory directly. Use the following command, replacing the placeholders with your actual paths:

```bash
docker run --platform=linux/amd64 -d \
-e NODE_ROLE=worker \
-e S3_HOST=https://s3.us-west-1.amazonaws.com \
-e BOOT_NODES=/ip4/146.190.197.136/tcp/31783/p2p/12D3KooWMUFNmnPBEZY5y7qqB8F6eVEzfPXG7KAd1v1FV1Q44A6d,/ip4/209.38.5.92/tcp/30564/p2p/12D3KooWK2qKNvmuYeQ7TFSkja8wqgSdvpfEYKgqkvRSf1GtpHEN \
-v /path/to/your/local/keys:/app/keys \
-v /path/to/your/local/db_path:/app/db \
-p 9527:9527 \
ghcr.io/blocklessnetwork/b7s:v0.6.2
```

## Additional Configuration
### Volume Configuration
The command includes volume mappings that map directories on your host machine to the Docker container. These mappings are used to persist the database data and, optionally, key storage used by your b7s node. Ensure the directories exist on your host or Docker will create them for you, which might not have the desired permissions.

### Network Configuration
The port 9527 is mapped from the host to the container (-p 9527:9527). This is the peer-to-peer (P2P) communication port. Ensure that this port is open in your firewall settings to allow incoming and outgoing connections to and from other nodes.

### Monitoring and Logs
To monitor the logs of your b7s worker node, use the Docker logs command:

```bash
docker logs -f b7s-worker-aws
docker logs -f b7s-worker-local
```

These commands will follow the log output in the terminal, allowing you to monitor the operational status of your worker node in real-time.
