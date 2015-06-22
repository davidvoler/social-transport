import tornado


class BaseHandler(tornado.web.RequestHandler):

    def get_current_user(self):
        return self.get_cookie("social-transport")

    def has_permission(self, user, action):
        return True
