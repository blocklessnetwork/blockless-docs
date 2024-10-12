# b7s (Blockless Networking Daemon)

b7s is a peer-to-peer networking daemon for the Blockless Network, designed to facilitate distributed computing and resource management. It supports Windows, Linux, and MacOS platforms on both x64 and arm64 architectures.

You can find the repository on [GitHub](https://github.com/blocklessnetwork/b7s).

## Installation

You can install b7s using either curl, wget, or Docker:

### **Using curl**

```bash
sudo sh -c "curl https://raw.githubusercontent.com/blocklessnetwork/b7s/main/download.sh | bash"
```

### **Using wget**

```bash
sudo sh -c "wget https://raw.githubusercontent.com/blocklessnetwork/b7s/main/download.sh -v -O download.sh; chmod +x download.sh; ./download.sh; rm -rf download.sh"
```

### **Using Docker**

You can also use Docker to install b7s.

**Prerequisites**

- A machine running Docker
- A valid **`AWS_ACCESS_KEY_ID`** and **`AWS_SECRET_ACCESS_KEY`** for an S3-compatible storage provider. This is used for backing up your node's keys and configuration.
- A valid **`KEY_PATH`** and **`KEY_PASSWORD`** for your S3-compatible storage provider. This is used for backing up your node's keys and configuration.

**Running the Image**

First, pull the latest version of the b7s Docker image from the public registry:

```bash
docker pull ghcr.io/blocklessnetwork/b7s:v0.0.3
```

Then, run the image:

```bash
docker run -d --name b7s \
  -e AWS_ACCESS_KEY_ID=<YOUR_AWS_ACCESS_KEY_ID> \
  -e AWS_SECRET_ACCESS_KEY=<YOUR_AWS_SECRET_ACCESS_KEY> \
  -e KEY_PATH=<YOUR_S3_KEY_PATH> \
  -e KEY_PASSWORD=<YOUR_S3_KEY_PASSWORD> \
  -e CHAIN_RPC_NODE=<YOUR_CHAIN_RPC_NODE> \
  -p 9527:9527 \
  ghcr.io/blocklessnetwork/b7s:v0.0.5-rc1
```

## Usage

| Flag                 | Short Form | Default Value           | Description                                                                                           |
| -------------------- | ---------- | ----------------------- | ----------------------------------------------------------------------------------------------------- |
| log-level            | -l         | “info”                  | Specifies the level of logging to use.                                                                |
| peer-db              | N/A        | “peer-db”               | Specifies the path to database used for persisting peer data.                                         |
| function-db          | N/A        | “function-db”           | Specifies the path to database used for persisting function data.                                     |
| role                 | -r         | “worker”                | Specifies the role this node will have in the Blockless protocol (head or worker).                    |
| address              | -a         | “0.0.0.0”               | Specifies the address that the libp2p host will use.                                                  |
| port                 | -p         | 0                       | Specifies the port that the libp2p host will use.                                                     |
| private-key          | N/A        | N/A                     | Specifies the private key that the libp2p host will use.                                              |
| concurrency          | -c         | node.DefaultConcurrency | Specifies the maximum number of requests the node will process in parallel.                           |
| rest-api             | N/A        | N/A                     | Specifies the address where the head node REST API will listen on.                                    |
| boot-nodes           | N/A        | N/A                     | Specifies a list of addresses that this node will connect to on startup, in multiaddr format.         |
| workspace            | N/A        | “./workspace”           | Specifies the directory that the node can use for file storage.                                       |
| runtime              | N/A        | N/A                     | Specifies the runtime address used by the worker node.                                                |
| dialback-address     | N/A        | N/A                     | Specifies the advertised dialback address of the Node.                                                |
| dialback-port        | N/A        | N/A                     | Specifies the advertised dialback port of the Node.                                                   |
| cpu-percentage-limit | N/A        | 1.0                     | Specifies the amount of CPU time allowed for Blockless Functions in the 0-1 range, 1 being unlimited. |
| memory-limit         | N/A        | N/A                     | Specifies the memory limit for Blockless Functions, in kB.                                            |

## Dependencies

b7s depends on the following repositories:

- blocklessnetwork/runtime
- blocklessnetwork/orchestration-chain

## Contributing

For information on contributing to the b7s project, refer to the src/README file within the project repository.

Your contributions are welcome, and we encourage you to submit pull requests, report bugs, and share your ideas to improve the b7s networking daemon and help us build a more efficient and robust blockless network.
