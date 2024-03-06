import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/system";
import { Colors } from "../../theme/theme";

interface Props extends TooltipProps {
  children: any;
  title: string;
  maxWidth?: number;
  placement?: any;
}

const ToolTipJ = ({
  children,
  title,
  maxWidth,
  placement = "right-end",
  ...props
}: Props) => {
  const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} placement={placement} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "white",
      borderRadius: "0px",
      color: Colors.blackish[400],
      maxWidth: maxWidth ?? 400,
      fontSize: "14px",
      border: `1px solid ${Colors.blackish[400]}`,
      fontWeight: "inherit",
    },
    [`& .${tooltipClasses.arrow}`]: {
      color: Colors.blackish[400],
    },
  }));
  return (
    <HtmlTooltip
      arrow
      title={
        <span
          dangerouslySetInnerHTML={{ __html: title }}
          style={{
            whiteSpace: "pre-line",
            color: Colors.blackish[400],
          }}
        />
      }
    >
      {children}
    </HtmlTooltip>
  );
};

export default ToolTipJ;
