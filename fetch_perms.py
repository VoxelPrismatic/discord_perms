print("perms = {"
for x in range(53):
    perms = discord.Permissions(1 << x)
    for perm in perms:
        if perm[1]:
            print("   ", f'"{perm[0].upper()}":'.ljust(25), f"0x{1 << x:08x},")
print("}")
