# KC Studio OS — Free Architecture

## Web
Next.js/React/TypeScript provides the Studio Command dashboard and public experience surfaces.

## Mobile
Flutter is the cross-platform client boundary for the KC app experience. Firebase is the planned auth/data boundary.

## Edge
Cloudflare owns DNS/edge routing and may host Workers/R2 infrastructure.

## CI/CD
GitHub Actions performs install → lint → typecheck → test → build. Deployment jobs remain environment-gated and require real provider evidence.

## Reference surfaces
AppDeploy remains a deployable studio surface when its deployment gate is available. B12 remains a visual/reference generator, not the canonical source of truth.
