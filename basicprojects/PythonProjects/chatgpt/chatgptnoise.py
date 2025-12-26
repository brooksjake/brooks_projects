import pygame
import noise
import sys

class Grid:
    def __init__(self, width, height, cell_size):
        self.width = width
        self.height = height
        self.cell_size = cell_size
        self.rows = height // cell_size
        self.cols = width // cell_size
        self.scale = 50
        self.octaves = 6
        self.persistence = 0.5
        self.lacunarity = 2.0
        self.offset = (0, 0)
        self.grid = [[0 for x in range(self.cols)] for y in range(self.rows)]

    def update(self):
        for row in range(self.rows):
            for col in range(self.cols):
                x = col * self.cell_size
                y = row * self.cell_size
                self.grid[row][col] = noise.pnoise3(
                    (x + self.offset[0])/self.scale,
                    (y + self.offset[1])/self.scale,
                    0,
                    self.octaves,
                    self.persistence,
                    self.lacunarity
                )

    def draw(self, surface):
        for row in range(self.rows):
            for col in range(self.cols):
                color = int(self.grid[row][col] * 255)
                rect = pygame.Rect(
                    col * self.cell_size,
                    row * self.cell_size,
                    self.cell_size,
                    self.cell_size
                )
                pygame.draw.rect(surface, (color, color, color), rect)

pygame.init()

width = 640
height = 480
cell_size = 10

screen = pygame.display.set_mode((width, height))
pygame.display.set_caption("Perlin Noise Grid")

grid = Grid(width, height, cell_size)

clock = pygame.time.Clock()

while True:
    dt = clock.tick(60) / 1000.0

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()

    grid.update()

    screen.fill((255, 255, 255))

    grid.draw(screen)

    pygame.display.flip()
