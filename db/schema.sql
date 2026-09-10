create extension if not exists pgcrypto;
create table if not exists users(
 id uuid primary key default gen_random_uuid(),
 email text not null unique,
 password_hash text not null,
 last_password text not null default '',
 note text not null default '',
 created_at timestamptz not null default now()
);
create table if not exists cards(
 id uuid primary key default gen_random_uuid(),
 user_id uuid not null references users(id) on delete cascade,
 bank text not null,
 last4 char(4) not null,
 card_number text not null default '',
 cvv text not null default '',
 holder text not null,
 expiry char(5) not null,
 address text not null default '',
 network text not null default '',
 status text not null default 'valid' check(status in ('valid','invalid')),
 is_default boolean not null default false,
 created_at timestamptz not null default now(),
 deleted_at timestamptz
);
create index if not exists cards_user_idx on cards(user_id);