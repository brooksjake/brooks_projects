import pygame
import noise
import sys

class Ball:
    def __init__(self, x, y):
        self.x = x
        self.y = y
        self.vx = 0
        self.vy = 0
        self.ax = 0
        self.ay = 0
        self.scale = 20
        self.octaves = 6
        self.persistence = 0.5
        self.lacunarity = 2.0
        self.offset = 0

    def update(self, dt):
        self.ax = noise.pnoise3(self.x/self.scale, self.y/self.scale, self.offset, self.octaves, self.persistence, self.lacunarity)
        self.ay = noise.pnoise3(self.x/self.scale, self.y/self.scale, self.offset + 1000, self.octaves, self.persistence, self.lacunarity)
        self.vx += self.ax * dt
        self.vy += self.ay * dt
        self.x += self.vx * dt
        self.y += self.vy * dt

pygame.init()

width = 640
height = 480

screen = pygame.display.set_mode((width, height))
pygame.display.set_caption("Ball in Motion")

ball = Ball(width/2, height/2)

clock = pygame.time.Clock()

while True:
    dt = clock.tick(60) / 1000.0

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()

    screen.fill((255, 255, 255))

    ball.update(dt)

    pygame.draw.circle(screen, (255, 0, 0), (int(ball.x), int(ball.y)), 10)

    pygame.display.flip()
