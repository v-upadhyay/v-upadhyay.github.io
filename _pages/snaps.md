---
layout: page
title: Photography
permalink: /photography/
nav: true
nav_order: 5
---

## My Gallery

Here is a collection of my naive endeavours.

<div class="row">
  {% for file in site.static_files %}
    {% if file.path contains 'assets/img/gallery/' %}
      {% if file.extname == '.jpg' or file.extname == '.jpeg' or file.extname == '.png' or file.extname == '.JPG' %}
        
        {% assign filename = file.name | remove: file.extname %}
        
        <div class="col-sm-4 mt-3 mt-md-0">
            {% include figure.liquid loading="lazy" path=file.path title=filename class="img-fluid rounded z-depth-1" %}
        </div>

      {% endif %}
    {% endif %}
  {% endfor %}
</div>