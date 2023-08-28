# Webpack Host Vite Remotes

This repository demonstrates how to dynamically consume Vite remote applications within a Webpack host. The primary objective is to set up a Webpack host that offers all shared external dependencies (e.g., React, ReactDOM, React Router). This host can then seamlessly consume a remote Vite bundle.

## 🚀 Getting Started

### Prerequisites

- Ensure you have Node.js installed.

### Installation and Setup

#### 1. Navigate to `remote`

```bash
cd remote
```

#### 2. Install dependencies and build

```bash
npm install
npm run build
```

After this step, you should find a `remote.umd.js` file inside the `/host/public` directory.

#### 3. Navigate to `host`

```bash
cd ../host
```

#### 4. Install dependencies and start the host

```bash
npm install
npm run start
```

🎉 **Congratulations!** You're now serving a remote Vite application within your Webpack host.
