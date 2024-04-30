import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import Link from 'next/link';

export default function FloatingActionButton() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="primary" aria-label="add" className="bg-yellow-300 fixed bottom-0 right-0 ">
        <Link href={'/bot'}>
        <QuestionAnswerIcon />
        </Link>
      </Fab>
    </Box>
  );
}
