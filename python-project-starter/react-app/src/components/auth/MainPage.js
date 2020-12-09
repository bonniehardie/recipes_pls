import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Box } from '@material-ui/core';
import useStyles from './styles/MainPageStyles';

export default function MainPage() {
  const classes = useStyles();

  return (
    <Box className={ classes.mainpageContainer }>
      <main className={ classes.main }>
        <Switch>
          <Route path="/allnotebooks">
            <NotebookPanel />
          </Route>
          <Route path="/notebooks/:current_notebook/notes/:current_note/tags/:current_tag">
            <Box className={ classes.noteviewcontainer }>
              <NoteInfoPanel />
              <EditorPanel />
            </Box>
          </Route>
        </Switch>
      </main>
    </Box>
  );
}
