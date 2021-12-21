# TypeScript API

## Github Actions

### Configure Renovate action

1. Reuse/[Generate a personal access token](https://github.com/settings/tokens) with the `repo:public_repo` scope.
    1. Name: `renovatebot`
    1. Copy the generated token, starts with `ghp_...`
1. Go to your repository/organization settings, page `Secrets` and click `New repository/organization secret`.
    1. Name: `RENOVATE_BOT`
    1. Value: `ghp_...` (paste from clipboard)

The Github Action "Renovate" is now configured to use the `RENOVATE_BOT` secret from your github repository/organization settings!
