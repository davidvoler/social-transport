
"""bus_handler.py


BusHandler - describe you module here
"""

from bson.json_util import dumps
from base_handler import BaseHandler

class BusHandler(BaseHandler):
    """

    """
    def initialize(self, db, collection):
        self._db = db
        self._collection = collection

    def get(self):
        items = self._db[self._collection].find()
        self.write(dumps(items))

