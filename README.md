# kwin-move-desktop-windows

A KWin script for KDE Plasma 6 that moves windows from the current virtual desktop to the next or previous virtual desktop using global keyboard shortcuts.

## Features

- Move windows to the next or previous virtual desktop.
- Automatically switch to the destination desktop.
- Keep windows already on the destination desktop.
- Ignore windows pinned to all desktops and special windows.

## Default shortcuts

| Shortcut | Action |
| --- | --- |
| `Meta+Ctrl+Alt+Down` | Move windows to next desktop |
| `Meta+Ctrl+Alt+Up` | Move windows to previous desktop |

You can customize these shortcuts under **System Settings > Keyboard > Shortcuts > Window Management** after enabling the script. Existing installations may retain their previously saved shortcuts; change them manually in System Settings if necessary. Check for conflicts with other KWin shortcuts.

## Installation

### From the GUI

1. Download the [release](https://github.com/Braasileiro/kwin-move-desktop-windows/releases/latest).
2. Open **System Settings > Window Management > KWin Scripts**.
3. Select **Install from File...** and choose the downloaded `.kwinscript` file.
4. Enable **Move Desktop Windows** and click **Apply**.

### Build the package

Run from the repository root:

```bash
make package
```

This requires `make` and `zip`. It creates `kwin-move-desktop-windows.kwinscript`, which can be installed through the GUI.

### Install from the source directory

```bash
kpackagetool6 --type=KWin/Script -i .
```

Then enable the script in **System Settings > Window Management > KWin Scripts**.

## Requirements

- KDE Plasma 6 / KWin 6
