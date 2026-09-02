---
title: Plateo
kicker: Agente de IA para restaurantes
summary: Plataforma que atiende, toma pedidos y escala a un humano cuando hace falta, sobre WhatsApp Business API y con panel de operación en tiempo real.
role: Diseño de producto, arquitectura y desarrollo completo
year: 2024 — hoy
url: https://www.plateo.cloud
urlLabel: plateo.cloud
accent: c1
featured: true
order: 1
tags:
  - n8n
  - WhatsApp Business API
  - Supabase
  - Astro
  - Tiempo real
metrics:
  - value: '600'
    label: pedidos gestionados al mes
  - value: '−70%'
    label: tiempo de atención
  - value: '24/7'
    label: sin operador humano
---

## El problema

Una pizzería pierde pedidos cada noche porque nadie puede contestar treinta conversaciones de WhatsApp a la vez. El cuello de botella no era la cocina: era la persona que copiaba pedidos del chat a la comanda.

## Qué construí

Diseñé y desarrollé la plataforma completa, de la conversación al panel de cocina:

- **Agente conversacional** sobre WhatsApp Business API, con orquestación de flujos en n8n y un modelo de lenguaje interpretando el pedido en lenguaje natural.
- **Traspaso bot → humano**, para que el operador tome el control de una conversación sin que el cliente note la costura.
- **Panel de operación en tiempo real**, donde el pedido aparece estructurado y listo para cocina en el momento en que se confirma.
- **Arquitectura multi-sede sobre Supabase**, con aislamiento por restaurante, y landing en Astro.
- **Modelo de suscripción mensual**, con altas y bajas gestionadas desde el mismo panel.

## Resultado

En producción, la pizzería gestiona alrededor de 600 pedidos mensuales con una reducción del 70% en el tiempo de atención. El operador dejó de transcribir y pasó a supervisar.
