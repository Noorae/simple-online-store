FROM openjdk:17-jdk-slim AS build
WORKDIR /app
COPY gradle/ gradle/
COPY gradlew ./
COPY build.gradle settings.gradle ./
COPY . ./
RUN chmod +x ./gradlew
RUN ./gradlew build
FROM openjdk:17-jdk-slim
WORKDIR /app
COPY --from=build /app/build/libs/store-1.0-SNAPSHOT.jar /app/store-1.0-SNAPSHOT.jar
EXPOSE 8080
CMD ["java", "-jar", "/app/store-1.0-SNAPSHOT.jar"]