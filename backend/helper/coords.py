from PIL import Image
from PIL.ExifTags import TAGS

#  CREDIT: https://medium.com/@osah.dilshan/how-to-extract-gps-data-from-images-using-python-9c09254bc80e

def get_gps_coords(image_file):
    # Open the image file
    image = Image.open(image_file)

    # Make a collection of properties and values corresponding to your image.
    exif = {}
    if image._getexif() is not None:
        for tag, value in image._getexif().items():
            if tag in TAGS:
                exif[TAGS[tag]] = value

    if "GPSInfo" in exif:
        gps_info = exif["GPSInfo"]

        def convert_to_degrees(value):
            """
            Helper function to convert the GPS coordinates stored in the EXIF to degrees in float format.

            Args:
                value (tuple): The GPS coordinate as a tuple (degrees, minutes, seconds)

            Returns:
                float: The coordinate in degrees
            """
            d = float(value[0])
            m = float(value[1])
            s = float(value[2])
            return d + (m / 60.0) + (s / 3600.0)

        # Convert latitude and longitude to degrees
        lat = convert_to_degrees(gps_info[2])
        lon = convert_to_degrees(gps_info[4])
        lat_ref = gps_info[1]
        lon_ref = gps_info[3]

        # Adjust the sign of the coordinates based on the reference (N/S, E/W)
        # if lat_ref != "N":
        #     lat = -lat
        # if lon_ref != "E":
        #     lon = -lon

        # Format the GPS coordinates into a human-readable string
        return "{0}° {1}, {2}° {3}".format(lat, lat_ref, lon, lon_ref)