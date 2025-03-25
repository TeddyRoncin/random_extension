// Replace every "nice" by "noice"

for (const parent of document.querySelectorAll("body *")) {
    for (const child of parent.childNodes) {
        if (child.nodeType === Node.TEXT_NODE) {
            const pattern = /\bnice\b/gi;
            const replacement = (match) => {
                if (match === 'NICE') {
                    return 'NOICE';
                } else if (match === 'Nice') {
                    return 'Noice';
                }
                return "noice";
            };
            child.textContent = child.textContent.replace(pattern, replacement);
        }
    }
}