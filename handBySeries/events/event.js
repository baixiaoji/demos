// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor() {
    this.events = {};
  }
  // Register an event handler
  on(eventName, callback) {
    this.events[eventName] = this.events[eventName] || [];

    this.events[eventName].push(callback);
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(callback => {
        callback()
      });
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    delete this.events[eventName];
  }

  remove(eventName, callback) {
    this.events[eventName].filter(cb => cb !== callback);
  }

  once(eventName, callback) {
    const wrapper = () => {
      this.remove(eventName, callback);
      callback();
    }

    this.on(eventName, wrapper);
  }
}

module.exports = Events;
