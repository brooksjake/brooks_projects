import pygame
import Snake, Segment, Food

pygame.init()
clock = pygame.time.Clock()

cellsize = 25

rows = 20
columns = 20

windowwidth = cellsize*rows
windowheight = cellsize*columns


def update():
    Snake.checkCollision()












def main():

    screen = pygame.display.set_mode((windowwidth, windowheight))
    pygame.display.set_caption("Snake")

    while True:
        clock.tick(15)
        
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                exit()
            elif event.type == pygame.KEYDOWN:
                print(event.key)
    
    pass



main()