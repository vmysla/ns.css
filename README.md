# ns.css
ns.css allows you to use multiple CSS libraries, frameworks and layouts without conflicts.

## Getting Started

Clone the repo: `git clone https://github.com/vmysla/ns.css.git`

Use in your pages:

``` html
<html>
  <body class="css-framework-1">
  	<section class="css-framework-2">Unsafe usage</section>
  	<section class="ns reset css-framework-2">Safe usage</section>
  </body>
</html>
```

Checkout a demo: `https://jsfiddle.net/vmysla/7sweyz6p/3/`