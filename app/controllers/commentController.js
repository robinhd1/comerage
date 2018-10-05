import { Comments } from "../../config/database";

class commentController {
  post(req, res) {
    const { body } = req.body;
    Comments.create({
      publicationDate: new Date(),
      body,
      Article_id: req.params.id,
      User_id: 1
    });

    res.redirect('back');
  }
}

module.exports = new commentController();
