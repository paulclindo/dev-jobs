import * as React from "react";

const JobContext = React.createContext();
JobContext.displayName = "JobContext";

function asyncReducer(state, action) {
  switch (action.type) {
    case "pending": {
      return { status: "pending", data: null, error: null, selected: null };
    }
    case "success": {
      return {
        status: "success",
        data: action.data,
        error: null,
      };
    }
    case "rejected": {
      return {
        status: "rejected",
        data: null,
        error: action.error,
      };
    }
    case "selected": {
      const selected = state.data?.find((item) => item.slug === action.slug);
      return {
        ...state,
        selected,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function JobProvider(props) {
  const [state, dispatch] = React.useReducer(asyncReducer, {
    status: "idle",
    data: null,
    error: null,
    selected: null,
  });

  return <JobContext.Provider value={[state, dispatch]} {...props} />;
}

function useJobs() {
  const context = React.useContext(JobContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within a JobProvider`);
  }
  return context;
}

export { JobProvider, useJobs };
