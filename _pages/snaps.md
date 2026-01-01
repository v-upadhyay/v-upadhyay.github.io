---
layout: page
title: Floral Captures
permalink: /photography/
nav: true
nav_order: 5
---

<style>
.masonry-gallery {
    column-count: 3; /* Default: 3 columns */
    column-gap: 15px; /* Space between columns */
}

/* Make sure images don't get cut in half between columns */
.masonry-item {
    break-inside: avoid;
    margin-bottom: 15px; /* Space below each image */
}

/* Responsive: 2 columns on tablets, 1 on phones */
@media (max-width: 800px) {
    .masonry-gallery {
        column-count: 2;
    }
}
@media (max-width: 500px) {
    .masonry-gallery {
        column-count: 1;
    }
}
</style>

A collection of my naive endeavours can be found here.

<div class="masonry-gallery">
  {% for file in site.static_files %}
    {% if file.path contains 'assets/img/gallery/' %}
      {% if file.extname == '.jpg' or file.extname == '.jpeg' or file.extname == '.png' or file.extname == '.JPG' %}
        
        {% assign filename = file.name | remove: file.extname %}
        
        <div class="masonry-item">
            {% include figure.liquid loading="lazy" path=file.path title=filename class="img-fluid rounded z-depth-1" %}
        </div>

      {% endif %}
    {% endif %}
  {% endfor %}
</div>