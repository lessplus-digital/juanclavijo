---
# ─────────────────────────────────────────────────────────────────────────────
# PLANTILLA DE PROYECTO
# Copia este archivo, renómbralo (el nombre no genera URL) y pon draft: false.
# La tarjeta entera enlaza a `url`, así que ese campo es obligatorio.
# ─────────────────────────────────────────────────────────────────────────────
title: Nombre del proyecto
kicker: Qué es, en cuatro palabras
summary: Una o dos frases. Qué problema resolvía y para quién. Sin adjetivos de folleto.
role: Tu papel en el proyecto
year: '2025'
country: España

url: https://ejemplo.com
urlLabel: ejemplo.com

# c1 arcilla · c2 musgo · c3 iris · c4 mantequilla. Uno distinto por proyecto.
accent: c1

# CÓMO SE PRESENTA
#   shot  → tarjeta compacta con la captura del sitio, de dos en dos.
#           Es lo normal para una web terminada.
#   scene → fila grande con una maqueta animada. Las escenas están dibujadas a
#           mano para un producto concreto (chat = Plateo, simulator = SPL,
#           access = SOMOS);
#           no reutilices una para un proyecto que no la merece.
layout: shot

# Con layout: shot, apunta a tu captura dentro de src/assets/. La ruta se
# valida aunque el proyecto esté en draft, por eso aquí va comentada.
# shot: ../../assets/shot-ejemplo.png

# Con layout: scene, elige la maqueta en vez de la captura.
# scene: chat

order: 99
draft: true

# Dos o tres frases cortas. Qué construiste, no qué tecnología usaste.
highlights:
  - Primera cosa concreta que resolviste.
  - Segunda cosa concreta.

tags:
  - Astro
  - TypeScript

# Máximo tres, y solo en las filas grandes (layout: scene). Si no hay números
# reales, borra la lista: un dato inventado se nota.
metrics:
  - value: '30%'
    label: lo que mejoró
---
