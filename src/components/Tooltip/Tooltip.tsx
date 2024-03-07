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
  placement = "right",
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
      padding: "16px",
      boxShadow: `2px 2px 6px ${Colors.black[40025]}`,
      fontWeight: "inherit",
    },
    [`& .${tooltipClasses.arrow}`]: {
      color: Colors.black[40025],
    },
  }));
  return (
    <HtmlTooltip
      //arrow
      title={
        <span
          dangerouslySetInnerHTML={{ __html: title }}
          style={{
            whiteSpace: "pre-line",
            color: Colors.blackish[400],
            lineHeight: "22px",
            fontSize: "16px",
            letterSpacing: "1px",
            textTransform: "capitalize",
            textAlign: "justify",
          }}
        />
      }
    >
      {children}
    </HtmlTooltip>
  );
};

export default ToolTipJ;
