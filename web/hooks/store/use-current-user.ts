import { useContext } from "react";
// mobx store context
import { StoreContext } from "contexts/store-context";
// types
import { ICurrentUserStore } from "store/user";

export const useCurrentUser = (): ICurrentUserStore => {
  const context = useContext(StoreContext);
  if (context === undefined) throw new Error("useCurrentUser must be used within StoreProvider");

  return context.currentUser;
};
