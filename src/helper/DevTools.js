import React from 'react';

// Exported from redux-devtools
import { createDevTools } from 'redux-devtools';

// Monitors are separate packages, and you can make a custom one
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import MultipleMonitors from 'redux-devtools-multiple-monitors'
import Dispatcher from 'redux-devtools-dispatch'

import * as numberActions from '../actions/numberActions'

const actionCreators = {
  ...numberActions
}

// createDevTools takes a monitor and produces a DevTools component
const DevTools = createDevTools(
  // Monitors are individually adjustable with props.
  // Consult their repositories to learn about those props.
  // Here, we put LogMonitor inside a DockMonitor.
  // Note: DockMonitor is visible by default.
  <DockMonitor toggleVisibilityKey='ctrl-h' changePositionKey='ctrl-q' defaultIsVisible={false} >
    <MultipleMonitors>
      <LogMonitor expandStateRoot />
      <Dispatcher actionCreators={actionCreators} />
    </MultipleMonitors>
  </DockMonitor>
);

export default DevTools;