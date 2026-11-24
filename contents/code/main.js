function moveWindows(direction) {
    const desktops = workspace.desktops;
    const source = workspace.currentDesktop;

    const index = desktops.findIndex(
        desktop => desktop.id === source.id
    );

    if (index < 0) {
        return;
    }

    const target = desktops[index + direction];

    if (!target) {
        return;
    }

    for (const window of workspace.windowList()) {
        if (window.onAllDesktops || window.specialWindow) {
            continue;
        }

        if (window.desktops.some(
            desktop => desktop.id === source.id
        )) {
            window.desktops = [target];
        }
    }

    workspace.currentDesktop = target;
}

registerShortcut(
    "MoveAllWindowsToNextDesktop",
    "Move all windows to next desktop",
    "Meta+Ctrl+Alt+Down",
    () => moveWindows(1)
);

registerShortcut(
    "MoveAllWindowsToPreviousDesktop",
    "Move all windows to previous desktop",
    "Meta+Ctrl+Alt+Up",
    () => moveWindows(-1)
);
