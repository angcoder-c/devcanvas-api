# Proceso de normalización

<img width="2135" height="824" alt="image" src="https://github.com/user-attachments/assets/07a7d21f-4521-45ca-904a-89a5cd011544" />

## Forma 1NF

### Entidades

```plaintext
User (id, username, email, password_hash, current_position, biography, photo_url, is_employed, created_at)
```

```plaintext
SocialMedia (id, user_id, platform, url)
```

```plaintext
Company (id, name, logo_url, website, industry)
```

```plaintext
Institution (id, name, logo_url, website, country)
```

```plaintext
Experience (id, user_id, company_id, role, description, start_date, end_date, created_at)
```

```plaintext
Education (id, user_id, institution_id, degree, start_date, end_date, created_at)
```

```plaintext
Hobbie (id, user_id, name, icon, category)
```

```plaintext
Skill (id, user_id, name, category, level)
```

```plaintext
Project (id, user_id, title, description, repo_url, live_url, featured, created_at)
```

```plaintext
Testimonial (id, user_id, author_name, author_role, content, rating, created_at)
```

```plaintext
Message (id, user_id, from_name, from_email, content, read, sent_at)
```

## Forma 2NF

Cada atributo no-clave depende de la clave primaria completa. 

### Entidades

```plaintext
Sin cambios
```

## Forma 3NF

Ningún atributo no-clave debe depender de otro atributo no-clave.

**Problema:** `is_employed` en `USER` no depende directamente de `id`, depende del estado de `EXPERIENCE`.
```
id → experiences → (end_date IS NULL) → is_employed
```

Si se actualiza una experiencia y no actualiza `is_employed`, la base de datos queda inconsistente.

**Solución:** eliminar `is_employed` del schema y calcularlo en la entidad de dominio.

Además, se resulta conveniente añadir el campo `open2work`, como campo manual para añadir información al la entidad `User`.

### Entidades

```plaintext
User (id, username, email, password_hash, current_position, biography, photo_url, open2work, created_at)
```

```plaintext
SocialMedia (id, user_id, platform, url)
```

```plaintext
Company (id, name, logo_url, website, industry)
```

```plaintext
Institution (id, name, logo_url, website, country)
```

```plaintext
Experience (id, user_id, company_id, role, description, start_date, end_date, created_at)
```

```plaintext
Education (id, user_id, institution_id, degree, start_date, end_date, created_at)
```

```plaintext
Hobbie (id, user_id, name, icon, category)
```

```plaintext
Skill (id, user_id, name, category, level)
```

```plaintext
Project (id, user_id, title, description, repo_url, live_url, featured, created_at)
```

```plaintext
Testimonial (id, user_id, author_name, author_role, content, rating, created_at)
```

```plaintext
Message (id, user_id, from_name, from_email, content, read, sent_at)
```

## Forma BCNF

Todas las entidades cumplen BCNF tras eliminar `is_employed`.

Cada tabla tiene exactamente una clave candidata (`id`). No hay claves candidatas superpuestas en ninguna tabla. El único determinante de cualquier atributo es `id`.

### Entidades 

```plaintext
User (id, username, email, password_hash, current_position, biography, photo_url, open2work, created_at)
```

```plaintext
SocialMedia (id, user_id, platform, url)
```

```plaintext
Company (id, name, logo_url, website, industry)
```

```plaintext
Institution (id, name, logo_url, website, country)
```

```plaintext
Experience (id, user_id, company_id, role, description, start_date, end_date, created_at)
```

```plaintext
Education (id, user_id, institution_id, degree, start_date, end_date, created_at)
```

```plaintext
Hobbie (id, user_id, name, icon, category)
```

```plaintext
Skill (id, user_id, name, category, level)
```

```plaintext
Project (id, user_id, title, description, repo_url, live_url, featured, created_at)
```

```plaintext
Testimonial (id, user_id, author_name, author_role, content, rating, created_at)
```

```plaintext
Message (id, user_id, from_name, from_email, content, read, sent_at)
```

<img width="2135" height="824" alt="image" src="https://github.com/user-attachments/assets/11578dfc-22ad-4b0c-b691-4fe7fcd2dcd4" />
