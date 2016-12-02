define(["jquery", "scrollto"], function($, scrollto) {
	function BackTop(el, opts) {
		this.opts = $.extend({}, BackTop.OPATIONS, opts);
		this.$el = $(el);
		this.scrollto = new scrollto.ScrollTo({
			dest: 0,
			speed: this.opts.speed
		});
		if(this.opts.mode === "move") {
			this.$el.on("click", $.proxy(this._move, this));
		} else {
			this.$el.on("click", $.proxy(this._go, this));
		}
		this._checkPos();
		$(window).on("scroll", $.proxy(this._checkPos, this));
	};
	BackTop.prototype._move = function() {
		this.scrollto.move();
	};
	BackTop.prototype._go = function() {
		this.scrollto.go();
	};
	BackTop.prototype._checkPos = function() {
		if($(window).scrollTop() > this.opts.pos) {
			this.$el.fadeIn();
		} else {
			this.$el.fadeOut();
		}
	};
	BackTop.OPATIONS = {
		mode: "move",
		pos: $(window).height(),
		speed: 800
	};

	return {
		BackTop: BackTop
	}
});