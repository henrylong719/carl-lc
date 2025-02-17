def timeConversion(s):
    # Get AM or PM
    time_format = s[-2:] 
    hours = s[:2]
    rest = s[2:-2]
    
    # AM
    if time_format == "AM":
        # 12:01:00 AM
        if hours == "12":
            return "00" + rest
        # 07:01:00 AM
        else:
            return hours + rest
    # PM
    else:
        # 12:01:00 PM
        if hours == "12":
            return hours + rest
        # 07:05:00 PM
        else:
            new_hours = str(int(hours) + 12)
            return new_hours + rest