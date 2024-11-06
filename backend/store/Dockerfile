FROM openjdk:17-jdk-slim AS build-stage
WORKDIR /app
COPY build/libs/store-1.0-SNAPSHOT.jar /app/store-1.0-SNAPSHOT.jar
EXPOSE 8080
CMD ["java", "-jar", "/app/store-1.0-SNAPSHOT.jar"]