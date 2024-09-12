# Docker course: Foundations

Files from the Docker course: Foundations with Daniel Hernandez

This project is a simple API that allows you to get information about the author of the project.

## Run the project

1. Clone the repository
2. Run the project

```bash
docker build -t danielhergir/platzi-docker-course-foundations .

docker compose up -d
```

## Access the API

```bash
curl http://localhost:5000/getMyInfo
```

## References

- [Docker Course: Foundations](https://platzi.com/cursos/docker-fundamentos/)
