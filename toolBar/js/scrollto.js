define(["jquery"], function($) {
	function ScrollTo(opts) {
		this.opts = $.extend({}, ScrollTo.OPATIONS, opts);
		this.$el = $("html, body");
	}
	ScrollTo.prototype.move = function() {
		if($("window").scrollTop() != this.opts.dest) {
			if(!this.$el.is(":animated")) {
				this.$el.animate({
					scrollTop: this.opts.dest
				}, this.opts.speed);
			}
		}
	};
	ScrollTo.prototype.go = function() {
		this.$el.scrollTop(this.opts.dest);
	};

	ScrollTo.OPATIONS = {
		dest: 0,
		speed: 800
	};
	return {
		ScrollTo: ScrollTo
	}
});