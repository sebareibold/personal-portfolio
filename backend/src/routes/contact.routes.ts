import { Router, Request, Response } from 'express';
import { ContactManager } from '../managers/contact.manager';

const router = Router();
const contactManager = new ContactManager();

// GET /api/contact
router.get('/', async (req: Request, res: Response) => {
  try {
    const contact = await contactManager.getContact();
    if (!contact) {
      return res.status(404).json({ message: 'Información de Contacto no encontrada.' });
    }
    res.status(200).json(contact);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// POST /api/contact
router.post('/', async (req: Request, res: Response) => {
  try {
    const newContact = await contactManager.createOrUpdateContact(req.body);
    res.status(201).json(newContact);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

export default router;