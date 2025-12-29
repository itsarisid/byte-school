# Contributing to Byte School

First off, thank you for considering contributing to Byte School! It's people like you that make Byte School such a great tool for educational institutions.

## Code of Conduct

By participating in this project, you agree to abide by the [Code of Conduct](CODE_OF_CONDUCT.md).

## Getting Started

### Development Setup

1. Fork the repository.
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/byte-school.git`
3. Install dependencies: `npm install`
4. Create a branch: `git checkout -b feature/my-new-feature`
5. Start developing: `npm run dev`

### Project Structure

- `src/app`: Pages and route components.
- `src/components`: Reusable UI elements.
- `src/hooks`: Custom React hooks.
- `src/store`: Global state Management (Jotai).

## How to Contribute

### Reporting Bugs

- Check the [Issues](https://github.com/itsarisid/byte-school/issues) to see if the bug has already been reported.
- If not, create a new issue. Include a clear title, a description of the problem, steps to reproduce, and what you expected to happen.

### Suggesting Enhancements

- Open a new [Issue](https://github.com/itsarisid/byte-school/issues) and describe the enhancement you'd like to see.
- Explain why it would be useful to most Byte School users.

### Pull Requests

1. Keep your PRs focused. If you want to do multiple unrelated things, open multiple PRs.
2. Ensure the code follows the project's style (run `npm run lint`).
3. Update the documentation if you're making changes to features or the tech stack.
4. Fill out the [Pull Request Template](.github/PULL_REQUEST_TEMPLATE.md).

## Style Guide

- Use TypeScript for all new code.
- Follow the existing component pattern using Tailwind CSS 4 and shadcn/ui.
- Use Jotai for global state that needs to persist.

## Questions?

Feel free to open an issue for any questions or reach out to the maintainers.
