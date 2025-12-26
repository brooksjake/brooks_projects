import numpy as np
from scipy.spatial import Voronoi, voronoi_plot_2d
import tkinter as tk
from PIL import ImageTk, Image
import io

# Generate random points
points = np.random.rand(50, 2)

# Calculate Voronoi diagram
vor = Voronoi(points)

# Plot Voronoi diagram
fig, ax = voronoi_plot_2d(vor, show_vertices=False, line_colors='orange',
                          line_width=2, line_alpha=0.6, point_size=0)

# Convert plot to image
buf = io.BytesIO()
fig.savefig(buf, format='png', dpi=100)
buf.seek(0)
image = Image.open(buf)
photo = ImageTk.PhotoImage(image)

# Create window and display image
root = tk.Tk()
canvas = tk.Canvas(root, width=image.size[0], height=image.size[1])
canvas.pack()
canvas.create_image(0, 0, anchor='nw', image=photo)

root.mainloop()

