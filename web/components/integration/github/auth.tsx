import { observer } from "mobx-react";
// hooks
import { Button } from "@plane/ui";
import useIntegrationPopup from "hooks/use-integration-popup";
// ui
// types
import { IWorkspaceIntegration } from "@plane/types";
import { useStore } from "hooks";

type Props = {
  workspaceIntegration: false | IWorkspaceIntegration | undefined;
  provider: string | undefined;
};

export const GithubAuth: React.FC<Props> = observer(({ workspaceIntegration, provider }) => {
  // store hooks
  const {
    instance: { instance },
  } = useStore();
  // hooks
  const { startAuth, isConnecting } = useIntegrationPopup({
    provider,
    github_app_name: instance?.config?.github_app_name || "",
    slack_client_id: instance?.config?.slack_client_id || "",
  });

  return (
    <div>
      {workspaceIntegration && workspaceIntegration?.id ? (
        <Button variant="primary" disabled>
          Successfully Connected
        </Button>
      ) : (
        <Button variant="primary" onClick={startAuth} loading={isConnecting}>
          {isConnecting ? "Connecting..." : "Connect"}
        </Button>
      )}
    </div>
  );
});
