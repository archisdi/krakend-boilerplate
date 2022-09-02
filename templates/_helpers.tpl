{{/* vim: set filetype=mustache: */}}

{{/*
Define krakend jwt validator
*/}}
{{- define "krakend.jwt.validator" -}}
{{- include "jwt.validator" . | nindent 4 }}
{{- end }}

{{/*
Define krakend jwt signer
*/}}
{{- define "krakend.jwt.signer" -}}
{{- include "jwt.signer" . | nindent 4 }}
{{- end }}
