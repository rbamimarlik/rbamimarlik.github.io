---
layout: page
title: Kariyer
permalink: /career/
---

#### Açık Pozisyonlar
{{ site.data.career.updateDate }}

<div class="mdl-grid">

{% for position in site.data.career.positions %}
  <div class="mdl-card position mdl-shadow--2dp">
    <div class="mdl-card__title mdl-card--expand" style="background: url('{{position.thumbnail}}') center no-repeat {% if position.color %}{{position.color}}{% else %}#eee{% endif %}; width: 350px; height: 130px;">
      <h2 class="mdl-card__title-text">{{ position.name }}</h2>
    </div>
    <div class="mdl-card__supporting-text">
      {{ position.description }}
    </div>
    <div class="mdl-card__supporting-text">
      {% include icon name="location_on" %}
      {{ position.location }}
    </div>
    <div class="mdl-card__actions mdl-card--border">
      <a class="dialog-button mdl-button mdl-button--accent mdl-js-button mdl-js-ripple-effect" href="mailto:{{site.career_email}}?subject={{position.name}}">
        Başvur
      </a>
    </div>
  </div>
{% endfor %}

</div>