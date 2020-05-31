function Dictinay() {
    this.items = {}
    Dictinay.prototype.set = function (key, value) {
        this.items[key] = value
    }
    Dictinay.prototype.has = function(key) {
        return this.items.hasOwnProperty(key)
    }
    Dictinay.prototype.get = function (key) {
        return this.has(key) ? this.items[key] : undefined
    }
    Dictinay.prototype.remove = function (key) {
        if (!this.has(key)) return false
        delete this.items[key]
        return true
    }
    Dictinay.prototype.keys = function () {
        return Object.keys(this.items)
    }
    Dictinay.prototype.values = function () {
        return Object.values(this.items)
    }
    Dictinay.prototype.clear = function () {
        this.items = {}
    }
}
