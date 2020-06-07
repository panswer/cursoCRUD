const { Router } = require('express');

const {
    renderNoteForm,
    createNewNote,
    renderNotes,
    renderEditForm,
    updateNote,
    deleteNote
} = require('../controllers/notes.controller');

const router = Router();

// New note
router.get('/notes/add', renderNoteForm);

router.post('/notes/add', createNewNote);

// Get all notes
router.get('/notes', renderNotes);

// Edit notes
router.get('/notes/edit/:id', renderEditForm);

router.put('/notes/edit/:id', updateNote);

// Delete notes

router.delete('/notes/delete/:id', deleteNote);

module.exports = router;