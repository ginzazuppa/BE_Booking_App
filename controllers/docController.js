import Documentation from "../models/docModel.js";

export const getAllDocumentations = async (req, res) => {
   try {
      const documentations = await Documentation.find();
      res.json(documentations);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};

export const addDocumentation = async (req, res) => {
   try {
      const { title, description, link } = req.body;

      const newDocumentation = new Documentation({ title, description, link });
      await newDocumentation.save();

      res.status(201).json({ message: "Dokumentasi berhasil ditambahkan" });
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};

export const updateDocumentation = async (req, res) => {
   try {
      const { id } = req.params;
      const { title, description, link } = req.body;

      const updatedDocumentation = await Documentation.findByIdAndUpdate(id, { title, description, link }, { new: true });

      res.json({ message: "Dokumentasi berhasil diperbarui", updatedDocumentation });
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};

export const deleteDocumentation = async (req, res) => {
   try {
      const { id } = req.params;

      await Documentation.findByIdAndDelete(id);

      res.json({ message: "Dokumentasi berhasil dihapus" });
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};
