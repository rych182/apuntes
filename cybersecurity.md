# Roadmap Exacto de Cyberseguridad (12–18 meses)

Te lo voy a ordenar pensando en tu perfil:

* frontend dev
* aprendiendo backend
* algo de Python y C++
* interés en fullstack
* probablemente con presupuesto limitado

Así que el camino más rentable para ti sería:

> Web Security → AppSec → Pentesting Web → Cloud Security

Ese camino aprovecha TODO lo que ya sabes.

---

# FASE 0 — Mentalidad correcta (1 día)

Antes de empezar:

## NO te enfoques en:

* “hack tools”
* scripts automáticos
* Kali Linux solamente
* “hackear Facebook”
* WiFi hacking

## SÍ enfócate en:

* redes
* Linux
* web
* programación
* sistemas
* debugging
* cómo funcionan las aplicaciones reales

Ahí está el dinero de verdad.

---

# FASE 1 — Linux + Redes + Web (1-2 meses)

Esta fase es obligatoria.

# 1. Linux Básico

## Temas exactos:

1. filesystem
2. rutas absolutas/relativas
3. permisos (`chmod`, `chown`)
4. usuarios/grupos
5. pipes
6. grep
7. nano/vim
8. bash scripting básico
9. procesos
10. servicios
11. SSH
12. logs

## Gratis:

* [OverTheWire Bandit](https://overthewire.org/wargames/bandit/?utm_source=chatgpt.com)
* [Linux Journey](https://linuxjourney.com?utm_source=chatgpt.com)

## Premium:

* [Linux Basics for Hackers (Udemy suele tener cursos)](https://www.udemy.com?utm_source=chatgpt.com)

---

# 2. Redes

## Temas exactos:

1. IP
2. MAC
3. DNS
4. DHCP
5. routers/switches
6. TCP vs UDP
7. puertos
8. HTTP/HTTPS
9. SSL/TLS
10. modelo OSI
11. VPN
12. proxies
13. sockets

## Gratis:

* [Cisco Networking Academy](https://www.netacad.com?utm_source=chatgpt.com)
* [Practical Networking](https://www.practicalnetworking.net?utm_source=chatgpt.com)

## Premium:

* [Professor Messer Network+](https://www.professormesser.com?utm_source=chatgpt.com)

## Certificación:

* CompTIA Network+

---

# 3. HTTP y Web Internals

Aquí empieza lo importante para ti.

## Temas:

1. request/response
2. headers
3. cookies
4. sesiones
5. JWT
6. CORS
7. cache
8. CSRF
9. same-origin policy
10. REST APIs
11. autenticación
12. OAuth básico

## Aprende usando:

* DevTools
* Postman
* Burp Suite

## Gratis:

* [MDN Web Docs](https://developer.mozilla.org?utm_source=chatgpt.com)
* [HTTP Crash Course Traversy Media](https://www.youtube.com/watch?v=iYM2zFP3Zn0&utm_source=chatgpt.com)

---

# FASE 2 — Seguridad Web (2-4 meses)

Aquí YA empiezas a hacer hacking web.

# 4. OWASP Top 10 (ORDEN EXACTO)

## Aprende EN ESTE ORDEN:

### 1. Broken Access Control

* IDOR
* permisos

### 2. Authentication Failures

* sesiones
* JWT
* brute force

### 3. Injection

* SQLi
* command injection

### 4. XSS

* reflected
* stored
* DOM XSS

### 5. CSRF

### 6. SSRF

### 7. File Upload Vulnerabilities

### 8. Path Traversal

### 9. Insecure Deserialization

### 10. Security Misconfiguration

---

# RECURSO PRINCIPAL

## Obligatorio:

* [PortSwigger Web Security Academy](https://portswigger.net/web-security?utm_source=chatgpt.com)

Si completas eso BIEN, ya estás MUY adelante de muchísima gente.

---

# Herramientas que debes aprender AQUÍ

## Burp Suite

### Aprende:

1. Proxy
2. Repeater
3. Intruder
4. Decoder
5. Comparer

## Gratis:

* [Burp Suite Academy](https://portswigger.net/burp/documentation/desktop/getting-started?utm_source=chatgpt.com)

---

# FASE 3 — Programación para Seguridad (1-2 meses)

Como ya sabes JS, Python y algo de C++, aquí profundizas.

# 5. Python para Cybersecurity

## Temas:

1. sockets
2. requests
3. multithreading
4. scraping
5. APIs
6. automatización
7. regex
8. escaneo de puertos
9. parsing

## Proyectos:

* port scanner
* subdomain finder
* brute force demo
* log parser

## Gratis:

* [Automate the Boring Stuff](https://automatetheboringstuff.com?utm_source=chatgpt.com)

## Premium:

* [TCM Python 101 for Hackers](https://academy.tcm-sec.com?utm_source=chatgpt.com)

---

# 6. SQL

## Temas:

1. SELECT
2. JOIN
3. UNION
4. subqueries
5. WHERE
6. INSERT
7. UPDATE
8. DELETE

Porque SQL Injection requiere SQL REAL.

## Gratis:

* [SQLBolt](https://sqlbolt.com?utm_source=chatgpt.com)

---

# FASE 4 — Pentesting Real (2-4 meses)

Aquí ya haces laboratorios completos.

# 7. Reconocimiento

## Aprende:

1. subdomains
2. DNS enumeration
3. fingerprinting
4. technologies
5. Google dorks

## Herramientas:

* Nmap
* Amass
* Subfinder
* WhatWeb

---

# 8. Nmap

## Aprende:

1. escaneo básico
2. servicios
3. scripts NSE
4. detección de OS

## Gratis:

* [Nmap Official Docs](https://nmap.org/book/man.html?utm_source=chatgpt.com)

---

# 9. TryHackMe

## Haz EN ESTE ORDEN:

1. Pre Security
2. Complete Beginner
3. Jr Penetration Tester
4. Web Fundamentals
5. OWASP rooms

## Sitio:

* [TryHackMe](https://tryhackme.com?utm_source=chatgpt.com)

---

# 10. Hack The Box

Después de TryHackMe.

## Ruta:

1. Starting Point
2. Easy retired machines
3. Web challenges

## Sitio:

* [Hack The Box](https://www.hackthebox.com?utm_source=chatgpt.com)

---

# FASE 5 — Backend + AppSec (2-3 meses)

ESTA es probablemente la parte MÁS rentable para ti.

# 11. Node.js Security

## Temas:

1. JWT security
2. bcrypt
3. rate limiting
4. helmet
5. sanitización
6. validación
7. CORS
8. uploads seguros
9. secrets
10. dotenv
11. NoSQL injection

## Aprende:

* cómo DEFENDER APIs
* cómo romper APIs

---

# 12. API Security

## Temas:

1. REST security
2. GraphQL basics
3. API auth
4. broken object level authorization
5. API rate limiting

## Recurso:

* [OWASP API Security](https://owasp.org/www-project-api-security/?utm_source=chatgpt.com)

---

# FASE 6 — Cloud + DevSecOps (2-4 meses)

# 13. Docker

## Temas:

1. containers
2. Dockerfile
3. images
4. networking
5. volumes

## Gratis:

* [Docker Docs](https://docs.docker.com?utm_source=chatgpt.com)

---

# 14. AWS Básico

## Aprende:

1. IAM
2. EC2
3. S3
4. VPC
5. security groups
6. secrets

## Gratis:

* [AWS Skill Builder](https://skillbuilder.aws?utm_source=chatgpt.com)

## Certificación:

* AWS Certified Cloud Practitioner

---

# FASE 7 — Certificaciones

# ORDEN recomendado

## 1. eJPT

Excelente para empezar pentesting.

* [INE eJPT](https://security.ine.com/certifications/ejpt-certification/?utm_source=chatgpt.com)

---

## 2. Security+

Muy buena para RRHH y fundamentos.

* CompTIA Security+
* [CompTIA Security+](https://www.comptia.org/certifications/security?utm_source=chatgpt.com)

---

## 3. PNPT

Muy práctica.

* [PNPT](https://certifications.tcm-sec.com/pnpt/?utm_source=chatgpt.com)

---

## 4. OSCP

La famosa.

* [OSCP](https://www.offsec.com/courses/pen-200/?utm_source=chatgpt.com)

NO la hagas demasiado temprano.

---

# Canales de YouTube MUY buenos

## En inglés:

* John Hammond
* The Cyber Mentor
* LiveOverflow
* NetworkChuck

## En español:

* S4vitar

---

# Libros MUY recomendados

## Principiante:

* Web Application Hacker's Handbook
* Linux Basics for Hackers

## Más avanzados:

* Real-World Bug Hunting
* The Tangled Web

---

# Cómo conseguir trabajo MÁS rápido

Con tu perfil:

* frontend
* backend
* JS
* Node
* Python

Tu mejor apuesta es:

## APPSEC

(Application Security)

Porque combina:

* desarrollo
* seguridad
* revisión de código
* APIs
* CI/CD
* cloud

Y hay menos competencia que en pentesting puro.

---

# Ruta REALISTA para ti

## Primeros 6 meses:

* Linux
* redes
* OWASP
* Burp
* PortSwigger
* TryHackMe

## Mes 6-12:

* AppSec
* APIs
* Docker
* AWS
* Node security

## Después:

* bug bounty
* OSCP
* cloud security
* DevSecOps

Y honestamente, con disciplina, sí puedes convertirte en alguien MUY valioso en ese nicho porque ya tienes mentalidad de desarrollador, no solo de “script kiddie”.
