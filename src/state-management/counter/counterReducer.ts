type Action = {
  type: string;
};

const counterReducer = (state: number, action: Action): number => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return 0;
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

export default counterReducer;
