import { useRouter } from "next/router";
// ui
import { Tooltip, StateGroupIcon } from "@plane/ui";
// helpers
import { renderShortDate } from "helpers/date-time.helper";
// types
import { IIssue } from "types";

export const IssueGanttBlock = ({ data }: { data: IIssue }) => {
  const router = useRouter();

  const handleIssuePeekOverview = () => {
    const { query } = router;

    router.push({
      pathname: router.pathname,
      query: { ...query, peekIssueId: data?.id, peekProjectId: data?.project },
    });
  };

  return (
    <div
      className="flex items-center relative h-full w-full rounded cursor-pointer"
      style={{ backgroundColor: data?.state_detail?.color }}
      onClick={handleIssuePeekOverview}
    >
      <div className="absolute top-0 left-0 h-full w-full bg-custom-background-100/50" />
      <Tooltip
        tooltipContent={
          <div className="space-y-1">
            <h5>{data?.name}</h5>
            <div>
              {renderShortDate(data?.start_date ?? "")} to {renderShortDate(data?.target_date ?? "")}
            </div>
          </div>
        }
        position="top-left"
      >
        <Tooltip tooltipHeading="Title" tooltipContent={data.name}>
          <div className="relative text-custom-text-100 text-sm truncate py-1 px-2.5 w-full">{data?.name}</div>
        </Tooltip>
      </Tooltip>
    </div>
  );
};

// rendering issues on gantt sidebar
export const IssueGanttSidebarBlock = ({ data }: { data: IIssue }) => {
  const router = useRouter();

  const handleIssuePeekOverview = () => {
    const { query } = router;

    router.push({
      pathname: router.pathname,
      query: { ...query, peekIssueId: data?.id, peekProjectId: data?.project },
    });
  };

  return (
    <div className="relative w-full flex items-center gap-2 h-full cursor-pointer" onClick={handleIssuePeekOverview}>
      <StateGroupIcon stateGroup={data?.state_detail?.group} color={data?.state_detail?.color} />
      <div className="text-xs text-custom-text-300 flex-shrink-0">
        {data?.project_detail?.identifier} {data?.sequence_id}
      </div>
      <Tooltip tooltipHeading="Title" tooltipContent={data.name}>
        <span className="text-sm font-medium flex-grow truncate">{data?.name}</span>
      </Tooltip>
    </div>
  );
};
