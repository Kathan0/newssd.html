// Global Tracker for Click Events and Page Views
(function () {
    // Function to log events
    function logEvent(eventType, details) {
        const log = {
            eventType: eventType,
            details: details,
            timestamp: new Date().toISOString()
        };
        console.log("User Event:", log);
        // You can send this log to a server or save it locally
    }

    // Track page views
    document.addEventListener("DOMContentLoaded", () => {
        logEvent("Page View", {
            url: window.location.href,
            title: document.title
        });
    });

    // Track click events
    document.addEventListener("click", (event) => {
        const target = event.target;
        logEvent("Click", {
            tagName: target.tagName,
            id: target.id || null,
            classList: target.classList ? Array.from(target.classList) : [],
            textContent: target.textContent.trim().substring(0, 100) // Limit text content to 100 chars
        });
    });
})();