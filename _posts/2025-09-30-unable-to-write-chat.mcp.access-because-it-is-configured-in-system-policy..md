---
date: 2025-09-30T15:58:36.859Z
title: Unable to write chat.mcp.access because it is configured in system policy.
description: >-
  How to fix VSCode error "Unable to write chat.mcp.access because it is
  configured in system policy."
categories:
  - Microsoft
  - AI
comments: true
layout: post
---

If your users are receiving VSCode error message “Unable to write chat.mcp.access because it is configured in system policy.” it may be related to an out-of-date VSCode (see bug report [here](https://github.com/microsoft/vscode/issues/246585)). If they still receive it, try enabling this setting at the org or enterprise level:

**MCP servers in Copilot**

If enabled, users can configure Model Context Protocol (MCP) servers (including third-party servers) for Copilot in all Copilot editors and Coding Agent.
